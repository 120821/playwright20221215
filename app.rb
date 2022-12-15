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

get '/get_by_label' do
  # This renders views/get_by_label.erb.
  erb :get_by_label
end

get '/get_by_role' do
  # This renders views/get_by_role.erb.
  erb :get_by_role
end

get '/get_by_list' do
  # this renders views/get_by_list.erb.
  erb :get_by_list
end

get '/get_by_id' do
  # this renders views/get_by_id.erb.
  erb :get_by_id
end
