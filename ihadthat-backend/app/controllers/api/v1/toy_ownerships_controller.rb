class Api::V1::ToyOwnershipsController < ApplicationController

    before_action :set_toy_ownership, only: [:show, :update, :destroy]


    # GET /toy_ownerships
    def index
      @toy_ownerships = ToyOwnership.all
  
      render json: @toy_ownerships
    end
  
    # GET /toy_ownerships/1
    def show
      render json: @toy_ownership
    end
  
    # POST /toy_ownerships
    def create
      @toy_ownership = ToyOwnership.new(toy_ownership_params)
      if @toy_ownership.save
        render json: @toy_ownership
      else
        render json: {message: @toy_ownership.errors }, status: 400
      end
    end
  
  
    # PATCH/PUT /toy_ownerships/1
    def update
      if @toy_ownership.update(toy_ownership_params)
        render json: @toy_ownership
      else
        render json: @toy_ownership.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /toy_ownerships/1
    def destroy
      @toy_ownership.destroy
    end
  
  
  
    private
    # Use callbacks to share common setup or constraints between actions.
    def set_toy_ownership
      @toy_ownership = ToyOwnership.find(params[:id])
    end
  
    # Only allow a trusted parameter "white list" through.
    def toy_ownership_params
      params.require(:toy_ownership).permit(:toy_id, :user_id)
    end
  
end
