# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here



## Ticket 1: Create a database table to store custom Agent IDs

##### Acceptance Criteria:

A new table called "CustomAgentIDs" is created in the database
The table has columns for Facility ID, Agent ID, and Custom ID
Facilities can insert, update, and delete custom IDs for Agents they work with
The existing "generateReport" function uses the custom IDs from the "CustomAgentIDs" table when generating reports
The custom IDs are unique for each Facility

##### Effort Estimate: 5-7 hours

##### Implementation Details:

Create a migration file to create the "CustomAgentIDs" table
Update the Facility and Agent models to include the new table's relationships
Create a RESTful API endpoint for Facilities to insert, update, and delete custom IDs
Update the "getShiftsByFacility" function to join the "CustomAgentIDs" table and return the custom IDs along with the metadata about the Agent
Update the "generateReport" function to use the custom IDs from the "CustomAgentIDs" table when generating reports


## Ticket 2: Update the UI to allow Facilities to manage custom Agent IDs
##### Acceptance Criteria:

A new page is added to the UI where Facilities can manage custom Agent IDs
Facilities can view, insert, update, and delete custom IDs for Agents they work with
The new page is accessible from the Facility dashboard

##### Effort Estimate: 7-10 hours

##### Implementation Details:

Create a new page in the UI for Facilities to manage custom Agent IDs
Create a form for Facilities to insert, update, and delete custom IDs
Use the RESTful API endpoint created in Ticket 1 to handle the form submissions
Update the Facility dashboard to include a link to the new page

## Ticket 3: Add validation to ensure custom Agent IDs are unique
##### Acceptance Criteria:

When a Facility inserts or updates a custom ID, the system checks that it's unique for that Facility
If the ID is not unique, the system returns an error message

##### Effort Estimate: 2-3 hours

##### Implementation Details:

Add a unique constraint to the "CustomAgentIDs" table for the combination of Facility ID and Custom ID
Update the RESTful API endpoint to handle the unique constraint violation errors and return an appropriate error message


## Ticket 4: Update the documentation to reflect the new feature
##### Acceptance Criteria:

The user documentation is updated to include information about custom Agent IDs
The documentation includes instructions for Facilities on how to manage custom Agent IDs
The documentation includes information for developers on how to work with the "CustomAgentIDs" table and the RESTful API endpoint

##### Effort Estimate: 2-3 hours

##### Implementation Details:

Add a new section to the user documentation explaining custom Agent IDs
Add screenshots and step-by-step instructions for how to manage custom IDs
Add a new section to the developer documentation explaining the "CustomAgentIDs" table and the RESTful API endpoint.


