require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
require 'openssl'
OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE
Bundler.require(*Rails.groups)

module OpenActiveVotingApp
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    config.encoding = "utf-8"
    config.filter_parameters += [:password]

    config.assets.enabled = false

    config.i18n.available_locales = [:en, :is, :pl]

    # Set default locale to English
    config.i18n.locale = :en

    # Enable localization fallback to :en
    config.i18n.fallbacks = true

    # Configure sensitive parameters which will be filtered from the log file.
    config.filter_parameters += [:password]
    config.middleware.use Rack::Deflater

    # Do not swallow errors in after_commit/after_rollback callbacks.

    config.autoload_paths << Rails.root.join('lib')

    config.action_dispatch.default_headers.merge!('P3P' => "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\"")
  end
end
