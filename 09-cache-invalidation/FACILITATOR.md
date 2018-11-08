# Class 09: Cache Invalidation

## Overview

Today will likely be a catch-up day as students continue to persist their API results in their databases. You can expect most students to have their database functioning locally and storing records, but they may not have completed the logic to conditionally retrieve the database results or request the data from the API, if it has not yet been stored in the database.

Today is a good day for group discussions on how to approach the remaining feature tasks from lab 8, if students have not completed all of them by the time lecture begins. It is also a good opportunity for a group debugging session. Select a volunteer to present their code on the screen and allow the rest of the class to help navigate the student(s) to debug their code base. Your role in this process is to ensure that students take turns making suggestions without speaking over each other, but you should not be leading the navigation of this process.

Today's lecture will likely involve continued discussion of data modeling, joins, and primary and foreign keys. There is no formal lab assignment where students are asked to write joins (although there ia stretch goal in lab 13). However, they should still be familiar with the syntax to write a join and understand when and why they would use joins in a real-world setting.

## How do I prep for today?

- Prepare a 10-15 demonstration to introduce the topic of today's code challenges.

## What changed from the previous class?

## What might students struggle with today?

## What bugs, issues, or surprises have come up in the past for this class?

## General comments

Students will follow the same pattern from lab 8 to retrieve data from the Meetup API and the Hiking Project API.

## Lecture

Introduce the concept of cache invalidation and discuss the concept with students prior to writing any code. This may be accomplished with an iPad or on a whiteboard. Ask students to help draw a diagram or flow chart to check the database for records and then, if the records exist, to determine how old the records are. Students will be determining how long each set of API results should be persisted before being considered "stale". If the results are too old, students should remove those records from the database and request new results from the API. Point out to students that the logic of requesting fresh API results is the same as requesting API results if they never existed in the database, so there is some logic that can be reused.

Students may ask about making their code more DRY - there is definitely room to do so with the cacheHit and cacheMiss methods. It is a good talking point, but be cautious not to make the code too DRY too soon; students need to understand the concepts and feel the pain of repetition first, and to understand that most developers don't write DRY code the first time through.

## Code skeleton

## Whiteboard diagrams
