class Api::ClubsController < ApplicationController
    def index
        render json: Club.all
    end
end
