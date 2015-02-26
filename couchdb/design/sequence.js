{
   "_id": "_design/sequence",
   "views": {
       "fasta": {
           "map": "function(doc) {\n  var path = [];\n\n  if (doc.phylum_reg) {\n    if (doc.phylum_reg) {\n      path.push(doc.phylum_reg);\n    }\n    if (doc.class_reg) {\n      path.push(doc.class_reg);\n    }\n    if (doc.order_reg) {\n      path.push(doc.order_reg);\n    }\n    if (doc.species_reg) {\n      path.push(doc.species_reg);\n    }\n    \n    // FASTA format sequence\n    var fasta = \">\" + doc._id;\n    if (doc.species_reg) {\n        fasta += \"|\" + doc.species_reg;\n    }\n    if (doc.accession) {\n        fasta += \"|\" + doc.accession;\n    }\n    fasta += \"\\n\";\n\n    var chunks = doc.nucraw.match(/.{1,60}/g);\n    fasta += chunks.join(\"\\n\");\n    fasta += \"\\n\";\n    \n    emit(path, fasta);\n  }\n\n if (doc.phylum_name) {\n    if (doc.phylum_name) {\n      path.push(doc.phylum_name);\n    }\n    if (doc.class_name) {\n      path.push(doc.class_name);\n    }\n    if (doc.order_name) {\n      path.push(doc.order_name);\n    }\n    if (doc.species_name) {\n      path.push(doc.species_name);\n    }\n    \n    // FASTA format sequence\n    var fasta = \">\" + doc._id;\n    if (doc.species_name) {\n        fasta += \"|\" + doc.species_name;\n    }\n    if (doc.accession) {\n        fasta += \"|\" + doc.accession;\n    }\n    fasta += \"\\n\";\n\n    var chunks = doc.nucleotides.match(/.{1,60}/g);\n    fasta += chunks.join(\"\\n\");\n    fasta += \"\\n\";\n    \n    emit(path, fasta);\n  }\n\n}"
       }
   },
   "language": "javascript"
}