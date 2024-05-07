#!/bin/bash

# Step 1: Unzip Container
docker run -v "$(pwd)/data:/app/data" unzip-container

# Step 2: TSV to CSV Container
docker run -v "$(pwd)/data:/app/data" tsv-to-csv-container

# Step 3: Split Container
docker run -v "$(pwd)/data:/app/data" split-container

# Step 4: Transform Container
docker run -v "$(pwd)/data:/app/data" transform-container

# Step 5: To Arango Container
docker run -v "$(pwd)/data:/app/data" to-arango-container


echo "Pipeline execution completed."
