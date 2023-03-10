export interface Event {
  id: number;
  name: string;
  raceDate: string;

  openRegisDate: string;

  closeRegisDate: string;
  outOfTicketFlag: boolean;
  province: string;
  location: string;
  capacity: number;
}
