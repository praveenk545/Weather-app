// export interface weatherData {
//   main: any;
// }
// export interface location {
//   city: 'Berlin';
//   woeid: 638242;
//   country: 'Germany';
//   lat: 52.516071;
//   long: 13.37698;
//   timezone_id: 'Europe/Berlin';
// }
// export interface wind {
//   chill: 54;
//   direction: 'SW';
//   speed: 14;
// }
// export interface atmosphere {
//   humidity: 87;
//   visibility: 14.98;
//   pressure: 1024;
// }
// export interface astronomy {
//   sunrise: '7:17 AM';
//   sunset: '6:31 PM';
// }
// export interface condition {
//   temperature: 59;
//   text: 'Mostly Cloudy';
//   code: 28;
// }
// export interface forcast {
//   0: {
//     day: 'Fri';
//     date: 1696608000;
//     high: 65;
//     low: 60;
//     text: 'Cloudy';
//     code: 26;
//   };

//   1: {
//     day: 'Sat';
//     date: 1696694400;
//     high: 65;
//     low: 48;
//     text: 'Rain';
//     code: 12;
//   };

//   2: {
//     day: 'Sun';
//     date: 1696780800;
//     high: 63;
//     low: 44;
//     text: 'Mostly Cloudy';
//     code: 28;
//   };

//   3: {
//     day: 'Mon';
//     date: 1696867200;
//     high: 61;
//     low: 51;
//     text: 'Cloudy';
//     code: 26;
//   };
//   4: {
//     day: 'Tue';
//     date: 1696953600;
//     high: 63;
//     low: 54;
//     text: 'Cloudy';
//     code: 26;
//   };
//   5: {
//     day: 'Wed';
//     date: 1697040000;
//     high: 72;
//     low: 57;
//     text: 'Showers';
//     code: 11;
//   };
//   6: {
//     day: 'Thu';
//     date: 1697126400;
//     high: 67;
//     low: 55;
//     text: 'Showers';
//     code: 11;
//   };
//   7: {
//     day: 'Fri';
//     date: 1697212800;
//     high: 64;
//     low: 53;
//     text: 'Mostly Sunny';
//     code: 34;
//   };
//   8: {
//     day: 'Sat';
//     date: 1697299200;
//     high: 65;
//     low: 51;
//     text: 'Mostly Cloudy';
//     code: 28;
//   };
//   9: {
//     day: 'Sun';
//     date: 1697385600;
//     high: 61;
//     low: 51;
//     text: 'Cloudy';
//     code: 26;
//   };
//   10: {
//     day: 'Mon';
//     date: 1697472000;
//     high: 61;
//     low: 52;
//     text: 'Partly Cloudy';
//     code: 30;
//   };
// }
export interface weatherData {
  location: {
    city: 'Berlin';
    woeid: 638242;
    country: 'Germany';
    lat: 52.516071;
    long: 13.37698;
    timezone_id: 'Europe/Berlin';
  };
  current_observation: {
    pubDate: 1696582652;
    wind: {
      chill: 54;
      direction: 'SW';
      speed: 14;
    };
    atmosphere: {
      humidity: 87;
      visibility: 14.98;
      pressure: 1024;
    };
    astronomy: {
      sunrise: '7:17 AM';
      sunset: '6:31 PM';
    };
    condition: {
      temperature: 59;
      text: 'Mostly Cloudy';
      code: 28;
    };
  };
  forecasts: [
    {
      day: 'Fri';
      date: 1696608000;
      high: 65;
      low: 60;
      text: 'Cloudy';
      code: 26;
    },
    {
      day: 'Sat';
      date: 1696694400;
      high: 65;
      low: 48;
      text: 'Rain';
      code: 12;
    },
    {
      day: 'Sun';
      date: 1696780800;
      high: 63;
      low: 44;
      text: 'Mostly Cloudy';
      code: 28;
    },
    {
      day: 'Mon';
      date: 1696867200;
      high: 61;
      low: 51;
      text: 'Cloudy';
      code: 26;
    },
    {
      day: 'Tue';
      date: 1696953600;
      high: 63;
      low: 54;
      text: 'Cloudy';
      code: 26;
    },
    {
      day: 'Wed';
      date: 1697040000;
      high: 72;
      low: 57;
      text: 'Showers';
      code: 11;
    },
    {
      day: 'Thu';
      date: 1697126400;
      high: 67;
      low: 55;
      text: 'Showers';
      code: 11;
    },
    {
      day: 'Fri';
      date: 1697212800;
      high: 64;
      low: 53;
      text: 'Mostly Sunny';
      code: 34;
    },
    {
      day: 'Sat';
      date: 1697299200;
      high: 65;
      low: 51;
      text: 'Mostly Cloudy';
      code: 28;
    },
    {
      day: 'Sun';
      date: 1697385600;
      high: 61;
      low: 51;
      text: 'Cloudy';
      code: 26;
    },
    {
      day: 'Mon';
      date: 1697472000;
      high: 61;
      low: 52;
      text: string;
      code: number;
    }
  ];
}
