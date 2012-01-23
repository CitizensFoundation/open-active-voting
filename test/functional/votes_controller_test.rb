require 'test_helper'

class VotesControllerTest < ActionController::TestCase
  test "should get get_ballot" do
    get :get_ballot
    assert_response :success
  end

  test "should get vote" do
    get :vote
    assert_response :success
  end

end
