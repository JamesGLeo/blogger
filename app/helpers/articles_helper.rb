module ArticlesHelper

  def article_params
    params.require(:article).permit(:header, :article)
  end

end