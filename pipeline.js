var source = mongodb({
  "uri": "${MONGODB_URI}",
  "timeout": "9000s"
  // "tail": false,
  // "ssl": false,
  // "cacerts": ["/path/to/cert.pem"],
  // "wc": 1,
  // "fsync": false,
  // "bulk": false,
  // "collection_filters": "{}",
  // "read_preference": "Primary"
})

var sink = elasticsearch({
  "uri": "${ELASTICSEARCH_URI}",
  "timeout": "9000s"
  // "aws_access_key": "ABCDEF", // used for signing requests to AWS Elasticsearch service
  // "aws_access_secret": "ABCDEF" // used for signing requests to AWS Elasticsearch service
  // "parent_id": "elastic_parent" // defaults to "elastic_parent" parent identifier for Elasticsearch
})

t.Config({"write_timeout":"300s"}).Source("source", source, "/.*/").Transform(goja({"filename": "transform.js"})).Save("sink", sink, "/.*/")
