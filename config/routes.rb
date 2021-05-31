Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :chatrooms, only: :show do
    # /chatrooms/:chatroom_id/messages
    resources :messages, only: :create
  end

  # /messages
  # resources :messages, only: :create

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
