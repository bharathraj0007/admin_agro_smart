# Online Secure Organ Donation Management System

A comprehensive web-based platform for managing organ donations securely and transparently. This system connects donors, hospitals, and administrators in a unified ecosystem.

## Features

### 🎯 Core Features
- **Secure Authentication**: Multi-role login system (Donor, Hospital, Admin)
- **Donor Management**: Register organs, track donation history, manage profile
- **Hospital Operations**: Request organs, manage inventory, track transplants
- **Admin Dashboard**: Analytics, user management, system monitoring
- **Smart Matching Algorithm**: AI-powered donor-recipient matching
- **Real-time Alerts**: Critical notifications for urgent cases

### 🔒 Security Features
- SSL/TLS Encryption
- HIPAA Compliance
- Two-Factor Authentication
- Daily Data Backups
- Secure audit logging
- Privacy-first design

### 📊 Analytics & Reporting
- Monthly donation trends
- Organ distribution analysis
- Success rate tracking
- User statistics
- System health monitoring

## Tech Stack

- **Frontend**: Next.js 14+ with TypeScript
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Database**: PostgreSQL (ready for integration)

## Project Structure

```
organ-donation-system/
├── app/
│   ├── page.tsx              # Main dashboard
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── LoginForm.tsx         # Authentication
│   ├── DonorDashboard.tsx    # Donor interface
│   ├── HospitalDashboard.tsx # Hospital interface
│   ├── AdminDashboard.tsx    # Admin interface
│   └── ui/                   # shadcn/ui components
├── lib/
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bharathraj0007/admin_agro_smart.git
cd organ-donation-system
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:
```bash
bun dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Demo Credentials

- **Email**: demo@example.com
- **Password**: demo123

## User Roles

### 👤 Donor
- Register for organ donation
- View donation history
- Download certificates
- Manage personal profile
- Track organ recipients (anonymously)

### 🏥 Hospital
- Request organs for patients
- Manage organ inventory
- Track transplant status
- Access matching algorithm
- Monitor critical cases

### 👨‍💼 Admin
- View system analytics
- Manage users (donors & hospitals)
- Monitor system alerts
- Access security logs
- Generate reports

## API Endpoints (Ready for Backend Integration)

```
POST   /api/auth/login
POST   /api/auth/register
GET    /api/donors/:id
PUT    /api/donors/:id
GET    /api/hospitals/:id
POST   /api/requests/organs
GET    /api/requests/organs
POST   /api/matching/algorithm
GET    /api/admin/analytics
GET    /api/admin/users
```

## Security Considerations

- All data is encrypted in transit (HTTPS)
- Passwords are hashed using bcrypt
- HIPAA-compliant data handling
- Regular security audits
- Comprehensive audit logging
- Role-based access control (RBAC)

## Database Schema (PostgreSQL)

```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('donor', 'hospital', 'admin'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Donors table
CREATE TABLE donors (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  blood_type VARCHAR(5),
  organs TEXT[],
  status VARCHAR(50),
  registered_date TIMESTAMP
);

-- Hospitals table
CREATE TABLE hospitals (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(255),
  location VARCHAR(255),
  capacity INTEGER
);

-- Organ Requests table
CREATE TABLE organ_requests (
  id SERIAL PRIMARY KEY,
  hospital_id INTEGER REFERENCES hospitals(id),
  organ_type VARCHAR(100),
  urgency_level VARCHAR(50),
  status VARCHAR(50),
  created_at TIMESTAMP
);

-- Transplants table
CREATE TABLE transplants (
  id SERIAL PRIMARY KEY,
  donor_id INTEGER REFERENCES donors(id),
  hospital_id INTEGER REFERENCES hospitals(id),
  organ_type VARCHAR(100),
  date TIMESTAMP,
  status VARCHAR(50)
);
```

## Future Enhancements

- [ ] Blockchain integration for immutable records
- [ ] Mobile app (React Native)
- [ ] Advanced ML matching algorithm
- [ ] Real-time notifications (WebSocket)
- [ ] Video consultation feature
- [ ] Multi-language support
- [ ] Integration with national registries
- [ ] Telemedicine capabilities

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@organdonation.com or open an issue on GitHub.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Charts from [Recharts](https://recharts.org/)

---

**Last Updated**: November 7, 2025
**Version**: 1.0.0
