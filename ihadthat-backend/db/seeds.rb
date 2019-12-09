# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.where(username: "Barbara").first_or_create(username: "Barbara", email:"barbara@test.com", password:"password")
Toy.where(name: "Rubik's Cube").first_or_create(name: "Rubik's Cube", description: "3D combination puzzle", url: 'https://en.wikipedia.org/wiki/Rubik%27s_Cube#/media/File:Rubiks_cube_solved.jpg')
Toy.where(name: "My Little Pony").first_or_create(name: "My Little Pony", description: "Ponies with colorful hair", url: "http://mylittlewiki.org/w/images/5/59/Rainbowdash1.jpg")
Toy.where(name: "Speak & Spell").first_or_create(name: "Speak & Spell", description: "Electronic toy by T.I. to teach spelling", url: "https://en.wikipedia.org/wiki/Speak_%26_Spell_(toy)#/media/File:Speak_&_Spell_(original_style).jpg")
Toy.where(name: "Rock 'Em Sock 'Em Robots").first_or_create(name: "Rock 'Em Sock 'Em Robots", description: "Red and blue boxing robots", url: "https://en.wikipedia.org/wiki/Rock_%27Em_Sock_%27Em_Robots#/media/File:Rock_'em_Sock_'em_Robots_Game.jpg")
Toy.where(name: "Cabbage Patch Kid").first_or_create(name: "Cabbage Patch Kid", description: "Baby dolls born in a cabbage patch who needed to be adopted", url: "https://en.wikipedia.org/wiki/Cabbage_Patch_Kids#/media/File:Cabbage_patch_kids_logo.gif")
ToyOwnership.where(user_id: 1, toy_id: 1).first_or_create(user_id: 1, toy_id: 1)
ToyOwnership.where(user_id: 1, toy_id: 2).first_or_create(user_id: 1, toy_id: 2)
