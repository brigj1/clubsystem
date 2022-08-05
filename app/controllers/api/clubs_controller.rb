class Api::ClubsController < ApplicationController
    def index
        render json: Club.all
    end

    def create
        club = current_user.leaders.create!(club_params)
        render json: club, status: :created
    end

    private

    def club_params
        params.permit(:name, :subject, :project, :description, :leader)
        # Brigham thinks we'll get :leader info via current_user.leaders
    end

end
