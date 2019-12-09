Rails.application.routes.draw do

  namespace :api do 
    namespace :v1 do 
      resources :users
      resources :toys
      resources :toy_ownerships

    end 
  end 
 end
