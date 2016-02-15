class DownloadController < ApplicationController
  def pdf
    send_file Rails.root.join('files', 'Quincy Iheme Resume.pdf'), :type => "application/pdf", :x_sendfile => true
  end
end