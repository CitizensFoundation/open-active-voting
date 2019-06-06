Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'
  #root 'votes#check_authentication'
  #root :to => redirect('/build/bundled/index.html')

  post "votes/authenticate_from_island_is"
  post "authenticate_from_island_is", to: "votes#authenticate_from_island_is"

  get "items/:id", to: "items#index"
  get "votes/is_vote_authenticated"
  get "votes/ballot"
  get "votes/get_areas"
  get "votes/boot"
  get "votes/get_ballot"
  get "votes/better_iceland_proxy"
  post "votes/post_vote"
  post "votes/insecure_email_login"
  get "votes/logout_and_information"
  get "votes/logout"
  get "votes/select_area"
  get "votes/help_info"
  get "votes/about_info"
  get "votes/rules_info"
  get "votes/idea_info"
  get "votes/government_info"
  get "votes/areas_info"
  get "votes/ibuar_info"
  get "votes/rvk_info"
  get "votes/logout_info"
  get "votes/force_session_id"
  get "votes/lukr_map"
  get "votes/lukr_map_2"
  get "votes/meta"

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
