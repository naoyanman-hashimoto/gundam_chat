class RoomsController < ApplicationController

  def index
    @rooms = Room.all
    @category = Category.all
    @series = Series.all
  end

  def new
    @room = Room.new
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def room_params
    params.require(:room).permit(:category_id,:series_id,:name, user_ids: [])
  end
end
