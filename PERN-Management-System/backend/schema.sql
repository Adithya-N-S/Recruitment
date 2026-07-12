-- PostgreSQL Database Schema Setup Script
-- Database Name: freshers_db
-- Create the 'events' table and insert 5 sample records for demonstration.

-- 1. Create table structure with exact VARCHAR lengths
CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    venue VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    coordinator VARCHAR(100) NOT NULL,
    description TEXT NOT NULL
);

-- 2. Insert exactly 5 diverse sample records for freshers events
INSERT INTO events (event_name, venue, date, coordinator, description) 
VALUES 
(
    'Freshers Welcome Ceremony 2026', 
    'Main Auditorium (Block A)', 
    '2026-08-15', 
    'Dr. Susan Matthew', 
    'The grand welcome and induction ceremony to officially induct the incoming batch of freshers with speeches, interactive senior-junior sessions, and high tea.'
),
(
    'Orientation & Ice-Breaking Bash', 
    'Open Air Theatre (OAT)', 
    '2026-08-16', 
    'Prof. John Doe', 
    'A fun-filled afternoon consisting of interactive team building games, group ice-breakers, and branch-wise networking sessions to help you make friends.'
),
(
    'Talent Hunt & Cultural Night', 
    'College Seminar Hall', 
    '2026-08-18', 
    'Dr. Ramesh Kumar', 
    'An open-stage event for all first-year students to showcase their hidden talents in music, dance, stand-up drama, and fine arts.'
),
(
    'Freshers Coding Hackathon', 
    'Advanced Computer Lab (CSE Block)', 
    '2026-08-20', 
    'Prof. Sarah Jenkins', 
    'A beginner-friendly programming contest tailored for first-year students to test problem-solving, logic, and teamwork skills with helpful mentors.'
),
(
    'Clubs Expo & Recruitment Drive', 
    'College Quadrangle Ground', 
    '2026-08-22', 
    'Prof. Alan Smith', 
    'Explore various student-led clubs, including Sports, Arts, Photography, coding societies, and Literature clubs, and sign up for membership.'
);
