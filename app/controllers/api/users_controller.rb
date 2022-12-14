class Api::UsersController < ApplicationController
    skip_before_action :authenticate_user

    def index
      users = User.all
      render json: users, status: :ok
    end

    # get '/api/me'
    def show
      if current_user
        render json: current_user, status: :ok
      else
        render json: { error: 'No active session' }, status: :unauthorized
      end
    end
  
    # post '/api/signup'
    def create
      user = User.create(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :ok
      else
        render json: { error: user.errors }, status: :unprocessable_entity
      end
    end

    def update
      user = User.find(session[:user_id])
      user.update!(user_params)
      render json: user, status: :accepted
    end

    def destroy
      User.find(session[:user_id]).destroy
    end
  
    private
  
    def user_params
      params.permit(:username, :first_name, :last_name, :age, :bio, :email,
        :password, :password_confirmation)
    end
  
end