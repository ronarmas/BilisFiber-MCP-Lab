import { technicians } from '../data/technicians.data';

let currentIndex = -1;

export function getNextAvailableTechnician() {

  const total = technicians.length;

  for (let i = 0; i < total; i++) {

    currentIndex = (currentIndex + 1) % total;

    if (technicians[currentIndex].available) {
      return technicians[currentIndex];
    }

  }

  return null;

}