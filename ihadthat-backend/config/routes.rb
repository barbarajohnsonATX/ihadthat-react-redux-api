Rails.application.routes.draw do

  resources :toy_ownerships
  namespace :api do 
    namespace :v1 do 
      resources :users
      resources :toys
    end 
  end 
 end
