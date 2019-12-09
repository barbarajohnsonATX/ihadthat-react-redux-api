class Api::V1::ToysController < ApplicationController
    
  # GET /toys
  def index
    @toys = Toy.all

    render json: @toys
  end


end
