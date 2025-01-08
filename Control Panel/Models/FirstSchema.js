const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  date:{
    type: Date,
    require: true
  },
  gender:{
    type: String,
    require: true,
    enum: ['Male', 'Female', 'Other']
  },
  country:{
    type: String,
    require: true,
    enum: [
      'NG', 'EG', 'ZA', 'KE', 'DZ',
      'IN', 'CN', 'JP', 'KR', 'ID',
      'DE', 'FR', 'GB', 'IT', 'ES',
      'US', 'CA', 'MX', 'CU', 'GT',
      'BR', 'AR', 'CO', 'CL', 'PE',
      'AU', 'NZ', 'PG', 'FJ', 'WS',
    ]
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
  }
  // password:{
  //   type: String,
  //   require: true,
  //   match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/]
  // }
});

const firstSchema = mongoose.model('admin',schema);
module.exports = firstSchema;