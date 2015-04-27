(function () {
    'use strict';
    angular.module('countryStateCity').factory('storage', function () {
        var getListCountry = function () {
            return ['USA', 'Australia'];
        };
        var getListState = function () {
            var listState = {
                USA: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
                    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
                    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
                    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
                Australia: ['South Australia', 'Western Australia', 'New South Wales', 'Queensland', 'Tasmania', 'Victoria']
            };
        };
        var getDetails = function () {
            var listDetails = {
                USA: {
                    Alabama: {capital: 'Montgomery', largestCity: 'Birmingham', population: null},
                    Alaska: {capital: 'Juneau', largestCity: 'Anchorage', population: 735132},
                    Arizona: {capital: 'Phoenix', largestCity: 'Phoenix', population: 6626624},
                    Arkansas: {capital: 'Little Rock', largestCity: 'Little Rock', population: 2959373},
                    California: {capital: 'Sacramento', largestCity: 'Los Angeles', population: 38332521},
                    Colorado: {capital: 'Denver', largestCity: 'Denver', population: 5268367},
                    Connecticut: {capital: 'Hartford', largestCity: 'Bridgeport', population: 3596080},
                    Delaware: {capital: 'Dover', largestCity: 'Wilmington', population: 925749},
                    Florida: {capital: 'Tallahassee', largestCity: 'Jacksonville', population: 19552860},
                    Georgia: {capital: 'Atlanta', largestCity: 'Atlanta', population: 9992167},
                    Hawaii: {capital: 'Honolulu', largestCity: 'Honolulu', population: 1404054},
                    Idaho: {capital: 'Boise', largestCity: 'Boise', population: null},
                    Illinois: {capital: 'Springfield', largestCity: 'Chicago', population: 12882135},
                    Indiana: {capital: 'Indianapolis', largestCity: 'Indianapolis', population: 6570902},
                    Iowa: {capital: 'Des Moines', largestCity: 'Des Moines', population: 3090416},
                    Kansas: {capital: 'Topeka', largestCity: 'Wichita', population: 2893957},
                    Kentucky: {capital: 'Frankfort', largestCity: 'Louisville', population: 4395295},
                    Louisiana: {capital: 'Baton Rouge', largestCity: 'New Orleans', population: 4625470},
                    Maine: {capital: 'Augusta', largestCity: 'Portland', population: 1328302},
                    Maryland: {capital: 'Annapolis', largestCity: 'Baltimore', population: 5928814},
                    Massachusetts: {capital: 'Boston', largestCity: 'Boston', population: 6692824},
                    Michigan: {capital: 'Lansing', largestCity: 'Detroit', population: null},
                    Minnesota: {capital: 'St. Paul', largestCity: 'Minneapolis', population: 5420380},
                    Mississippi: {capital: 'Jackson', largestCity: 'Jackson', population: 2991207},
                    Missouri: {capital: 'Jefferson City', largestCity: 'Kansas City', population: 6021988},
                    Montana: {capital: 'Helena', largestCity: 'Billings', population: 1015165},
                    Nebraska: {capital: 'Lincoln', largestCity: 'Omaha', population: 1868516},
                    Nevada: {capital: 'Carson City', largestCity: 'Las Vegas', population: 2790136},
                    'New Hampshire': {capital: 'Concord', largestCity: 'Manchester', population: 1323459},
                    'New Jersey': {capital: 'Trenton', largestCity: 'Newark', population: 8899339},
                    'New Mexico': {capital: 'Santa Fe', largestCity: 'Albuquerque', population: 2085287},
                    'New York': {capital: 'Albany', largestCity: 'New York', population: null},
                    'North Carolina': {capital: 'Raleigh', largestCity: 'Charlotte', population: 9848060},
                    'North Dakota': {capital: 'Bismarck', largestCity: 'Fargo', population: 723393},
                    Ohio: {capital: 'Columbus', largestCity: 'Columbus', population: 11570808},
                    Oklahoma: {capital: 'Oklahoma City', largestCity: 'Oklahoma City', population: 3850568},
                    Oregon: {capital: 'Salem', largestCity: 'Portland', population: 3930065},
                    Pennsylvania: {capital: 'Harrisburg', largestCity: 'Philadelphia', population: 12773801},
                    'Rhode Island': {capital: 'Providence', largestCity: 'Providence', population: 1051511},
                    'South Carolina': {capital: 'Columbia', largestCity: 'Columbia', population: 4774839},
                    'South Dakota': {capital: 'Pierre', largestCity: 'Sioux Falls', population: null},
                    Tennessee: {capital: 'Nashville', largestCity: 'Memphis', population: 6495978},
                    Texas: {capital: 'Austin', largestCity: 'Houston', population: 26448193},
                    Utah: {capital: 'Salt Lake City', largestCity: 'Salt Lake City', population: 2900872},
                    Vermont: {capital: 'Montpelier', largestCity: 'Burlington', population: 626630},
                    Virginia: {capital: 'Richmond', largestCity: 'Virginia Beach', population: 8260405},
                    Washington: {capital: 'Olympia', largestCity: 'Seattle', population: 6971406},
                    'West Virginia': {capital: 'Charleston', largestCity: 'Charleston', population: 1854304},
                    Wisconsin: {capital: 'Madison', largestCity: 'Milwaukee', population: 5742713},
                    Wyoming: {capital: 'Cheyenne', largestCity: 'Cheyenne', population: 582658},
                    flag: 'countryFlags/usa.jpg'
                }, Australia: {
                    'South Australia': {capital: 'Adelaide', largestCity: 'Adelaide', population: null},
                    'Western Australia': {capital: 'Perth', largestCity: 'Perth', population: 2163200},
                    'New South Wales': {capital: 'Sydney', largestCity: 'Sydney', population: 6967200},
                    'Queensland': {capital: 'Brisbane', largestCity: ' Brisbane', population: 4279400},
                    'Tasmania': {capital: 'Hobart', largestCity: 'Hobart', population: null},
                    'Victoria': {capital: 'Melbourne', largestCity: 'Melbourne', population: 5297600},
                    flag: 'countryFlags/australia.png'
                }
            };
        };
        return {
            getListCountry: getListCountry,
            getListState: getListState,
            getDetails: getDetails
        };
    });
})();
