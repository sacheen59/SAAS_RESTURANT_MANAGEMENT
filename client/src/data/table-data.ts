export interface Table {
  id: string;
  tableNo: string;
  tableType: string;
  capacity: number;
  status: string;
  reservationTime?: string;
  activeTime?: string;
}

export const TABLE_DATA: Array<Table> = [
  {
    id: "T1",
    tableNo: "01",
    tableType: "Standard Table",
    capacity: 1,
    status: "available",
  },
  {
    id: "T2",
    tableNo: "04",
    tableType: "Window Booth",
    capacity: 2,
    status: "occupied",
    activeTime: "42 min",
  },
  {
    id: "T3",
    tableNo: "09",
    tableType: "Large Round",
    capacity: 2,
    status: "reserved",
    reservationTime: "Today, 7:30 PM",
  },
  {
    id: "T4",
    tableNo: "12",
    tableType: "Standard Table",
    capacity: 4,
    status: "available",
    reservationTime: "Today, 7:30 PM",
  },
  {
    id: "T5",
    tableNo: "15",
    tableType: "Bar Stool",
    capacity: 4,
    status: "available",
  },
];
