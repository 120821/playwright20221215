require 'sinatra'
require 'sinatra/json'
require 'sinatra/subdomain'
require 'httparty'
require 'date'
require 'sinatra/custom_logger'
require 'sinatra/cross_origin'
require 'sinatra/activerecord'
require 'eth'
require 'logger'

set :logger, Logger.new('ddns_ruby.log')
disable :show_exceptions

configure do
  enable :cross_origin
end

get '/' do
  # This renders views/index.erb.
  erb :index
end
