require 'net/http'
require 'json'
require 'csv'

filename =  "./pressure.txt"
loop{

begin
  array_pressure = CSV.read(filename)
  pressure = array_pressure[0][0]
  uri = URI('http://192.168.11.9:3000/')
  req = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
  req.body = {Id: '3', Pressure: pressure}.to_json
  res = Net::HTTP.start(uri.hostname, uri.port) do |http|
    http.request(req)
  end
rescue
  retry
end
sleep(1)
}