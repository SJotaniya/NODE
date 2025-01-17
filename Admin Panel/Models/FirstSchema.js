const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  date:{
    type: String,
    require: true
  },
  gender:{
    type: String,
    require: true,
    enum: ['Male', 'Female', 'Other']
  },
  country: {
    type: String,
    require: true,
    enum: [
      'Nigeria', 'Egypt', 'South Africa', 'Kenya', 'Algeria', 'Morocco',
      'India', 'China', 'Japan', 'South Korea', 'Indonesia', 'Russia',
      'Germany', 'France', 'United Kingdom', 'Italy', 'Spain', 'Netherlands',
      'United States', 'Canada', 'Mexico', 'Cuba', 'Guatemala', 'Haiti',
      'Brazil', 'Argentina', 'Colombia', 'Chile', 'Peru', 'Ecuador',
      'Australia', 'New Zealand', 'Papua New Guinea', 'Fiji', 'Samoa', 'Tonga'
    ]
  },
  languages: {
    type: [String],
    required: true
  },
  cntnum:{
    type: Number,
    require: true,
    match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/]
  },
  email:{
    type: String,
    require: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/]
  },
  password:{
    type: String,
    require: true,
    match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/]
  },
  image:{
    type: String,
    require: true
  }
});

const firstSchema = mongoose.model('data', schema);
module.exports = firstSchema;