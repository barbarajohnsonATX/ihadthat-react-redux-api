Rails.application.routes.draw do

  post "api/v1/login", to: "api/v1/sessions#create"
  get "api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  delete "api/v1/logout", to: "api/v1/sessions#destroy"
  
  namespace :api do 
    namespace :v1 do 
      resources :toys

      resources :users
      resources :toy_ownerships

    end 
  end 
 end
