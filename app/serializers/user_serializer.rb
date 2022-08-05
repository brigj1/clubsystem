class UserSerializer < ActiveModel::Serializer
  #attributes :id, :username, :first_name, :last_name, :age, :bio, :email
  attributes :id, :username, :email
end
