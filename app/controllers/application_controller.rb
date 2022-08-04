class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_validation_errors
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  before_action :authenticate_user
  
  # , except: [:hello_world]

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end
  
  private
  
  # mocked for now to return the first user
  # later on this will return the user that's currently logged in
  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end
  
  def render_validation_errors(e)
    render json: { errors: e.record.errors }, status: :unprocessable_entity
  end
  
  def render_not_found(e)
    render json: { errors: e.message }, status: :not_found
  end
  
  def authenticate_user
    return
    return if current_user
    render json: { errors: "You must be logged in to do that." }, status: :unauthorized
  end
  
end

  #ApplicationController::authenticate_user