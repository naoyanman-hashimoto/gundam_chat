class MessagesController < ApplicationController
  def index
    @rooms = Room.all
    @category = Category.all
    @series = Series.all
  end
end
