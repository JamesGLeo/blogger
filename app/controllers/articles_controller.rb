class ArticlesController < ApplicationController
  include ArticlesHelper

  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
    @comment = Comment.new
    @comment.article_id = @article.id
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      redirect_to @article
      flash.notice = "Your entry - '#{@article.header}' - has been created!"
    else
      render :new
    end
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      flash.notice = "Your entry - '#{@article.header}' - has been updated!"
      redirect_to @article
    else
      render :edit
    end
  end

  def destroy
    @article = Article.find(params[:id])
    notice = @article.header
    @article.destroy
    flash.notice = "Your entry - '#{notice}' - has been deleted!"
    redirect_to(articles_path)
  end

end
