export interface VacationRequest {
  id: number;
  name: string;
  submittedOn: string;
  duration: string;
  vacationStart: string;
  vacationEnd: string;
  salary: number;
  imageUrl: string;
  pending: boolean;
  currentlyAt: string;
}
