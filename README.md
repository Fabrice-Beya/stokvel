

# Stokvel

An api for blockchain based stokvels applications.



## Get all existing Accounts

**Endpoint** :
*/api/account*

**Arguments**:
*None*

**Response**:
{
  Array of Accout Objects
}

**eg.**
*[{
  "name": "John Doe",
  "phoneNumber": "0710000000"
},
{
  "name": "Jane Doe",
  "phoneNumber": "0720000000"
}]*

## Get account by id
**Arguments**:
*account id*

**Response**:
{
  account object
}
**eg.**
*{
  "name": "John Doe",
  "phoneNumber": "0710000000"
}*

## Get account by address
**Arguments**:
*account public address*

**Response**:
{
  account object
}
**eg.**
*{
  "name": "John Doe",
  "phoneNumber": "0710000000"
}*

## Post new account
**Arguments**:
*account object*

**Response**:
{
  account object
}
**eg.**
*{
  "name": "John Doe",
  "phoneNumber": "0710000000"
}*

## Post new accounts
**Arguments**:
*array of account object*

**Response**:
{
  array account objects
}
**eg.**
*[{
  "name": "John Doe",
  "phoneNumber": "0710000000"
},
{
  "name": "Jane Doe",
  "phoneNumber": "0720000000"
}]*

## Put account
**Arguments**:
*updated account object*

**Response**:
{
  account object
}
**eg.**
*{
  "name": "John Doe",
  "phoneNumber": "0710000000"
}*

## Delete account by id
**Arguments**:
*account id*
**Response**:
{
  array of account objects
}
**eg.**:
*[{
  "name": "John Doe",
  "phoneNumber": "0710000000"
},
{
  "name": "Jane Doe",
  "phoneNumber": "0720000000"
}]*

## Delete all accounts
**Arguments**:
*none*

**Response**:
*Empty*

