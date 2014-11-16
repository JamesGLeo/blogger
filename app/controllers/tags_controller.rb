class TagsController < ApplicationController

  def index
    @tags = Tag.all
  end

  def show
    @tag = Tag.find(params[:id])
  end

  def destroy
    @tag = Tag.find(params[:id])
    notice = @tag.tag
    @tag.destroy
    flash.notice = "The tag - #{notice} - has been deleted."
    redirect_to(tags_path)
  end
end
