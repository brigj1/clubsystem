Rails.application.routes.draw do
  namespace :api do
    resources :club_members
    resources :clubs, only: [:index]
    resources :users, only: [:show, :update]
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end

  # route to test our configuration
  get '/hello', to: 'application#hello_world'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
