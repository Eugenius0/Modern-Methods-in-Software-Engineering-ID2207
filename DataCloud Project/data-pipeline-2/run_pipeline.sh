#!/bin/bash

# Step 1: Start
echo "Step 1: Start"
# No Docker container for Start step

# Step 2: GenerateSampleData
echo "Step 2: GenerateSampleData"
docker run generate-sample-data

# Step 3: ReceiveDataFromMQTT
echo "Step 3: ReceiveDataFromMQTT"
docker run receive-data-from-mqtt

# Step 4: CreateNotification
echo "Step 4: CreateNotification"
docker run create-notification

# Step 5: FilterNotifications
echo "Step 5: FilterNotifications"
docker run filter-notifications

# Step 6: End
echo "Step 6: End"
# No Docker container for End step

echo "Pipeline execution completed."
