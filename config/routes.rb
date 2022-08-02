Rails.application.routes.draw do
  resources :club_members
  resources :clubs
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # route to test our configuration
  get '/hello', to: 'application#hello_world'
end
