
export interface Device {
  _id: string;
  name: string;
  description: string;
}

export interface Interface {
  _id: string;
  name: string;
  type: string;
  device: string;
  hardware_id: string;
  description: string;
  ipv4_address: string;
}