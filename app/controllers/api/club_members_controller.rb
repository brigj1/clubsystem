class Api::ClubMembersController < ApplicationController
    def index
        cmems = ClubMember.all
        render json: cmems
    end
end
