# REST API DOCS

## [C]REATE DATA MUST BE RETURN (POST /)

- if success return uuid_index
- uuid_index must create on model

## [R]EAD DATA MUST BE RETURN (GET / || GET /:id)

- if success and multirecord must return array data
- if success and one record must return 1 object record

## [U]PDATE DATA MUST BE RETURN (PUT /:id || PATCH /:id)

- if success return data change

## [D]ELETE DATA MUST BE RETURN (DELETE /:id)

- if success return uuid_index

## FIND or SEARCH DATA MUST BE RETURN (GET /:key/:value)

- if success return array data

## ERROR VARIOUS CASE

- case create/update/delete affective 0 record
- case select found 0 record
- Wrong syntax return Internal Server Error
