require 'test_helper'

class VotesControllerTest < ActionController::TestCase
  test "should authenticate and get a ballot" do
    get :authenticate_from_island_is
    assert_response :success
    get :get_ballot
    assert_response :success
  end

  #test "should get vote" do
  #  get :vote
  #  assert_response :success
  #end

end
