Rails.application.routes.draw do

  post "api/v1/login", to: "api/v1/sessions#create"

  namespace :api do 
    namespace :v1 do 
      resources :users
      resources :toys
      resources :toy_ownerships

    end 
  end 
 end
