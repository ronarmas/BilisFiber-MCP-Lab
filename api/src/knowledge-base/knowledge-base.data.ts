import { Article } from './interfaces/article.interface';


export const articles: Article[] = [

  {
    articleId: 'KB-100001',

    title: 'LOS Red Light Troubleshooting',

    category: 'Fiber Connectivity',

    keywords: [
      'los',
      'red light',
      'no internet',
      'fiber'
    ],

    steps: [
      'Check fiber cable connection',
      'Ensure ONT power is connected',
      'Restart ONT device',
      'Check for area outage'
    ],

    resolution:
      'If LOS remains active after reboot, schedule technician visit.',
  },


  {
    articleId: 'KB-100002',

    title: 'Slow Internet Troubleshooting',

    category: 'Internet Performance',

    keywords: [
      'slow',
      'speed',
      'buffering',
      'wifi'
    ],

    steps: [
      'Restart router',
      'Check connected devices',
      'Run speed test',
      'Check signal strength'
    ],

    resolution:
      'Escalate if speed issue continues after basic troubleshooting.',
  },


  {
    articleId: 'KB-100003',

    title: 'ONT Offline Troubleshooting',

    category: 'Fiber Connectivity',

    keywords: [
      'ont offline',
      'no connection',
      'offline'
    ],

    steps: [
      'Check ONT power LED',
      'Restart ONT',
      'Check optical signal',
      'Verify outage status'
    ],

    resolution:
      'Create ticket and schedule technician if ONT remains offline.',
  },

];