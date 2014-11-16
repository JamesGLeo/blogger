module ArticlesHelper

  def article_params
    params.require(:article).permit(:header, :article, :tag_list, :image)
  end

end
