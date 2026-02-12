# FiSpoke - Project Features & Purpose

## Project Overview

**FiSpoke** is a comprehensive financial advisor platform built with Angular 18 that enables financial advisors to manage clients, process financial product applications, and provide a seamless digital banking experience. The platform integrates with multiple financial institutions and offers a wide range of financial products and services.

## Core Purpose

FiSpoke serves as a digital platform that:
- Connects financial advisors with their clients
- Streamlines the application process for various financial products
- Provides real-time account management and tracking
- Offers a marketplace for comparing financial products across institutions
- Enables secure document management and transaction processing
- Supports multiple user roles with role-based access control

---

## Key Features

### 1. Authentication & Security

- **Azure AD B2C Integration**: Secure authentication using Microsoft Azure Active Directory B2C
- **Multi-Factor Authentication**: Enhanced security with MFA support
- **JWT Token Management**: Secure token-based authentication
- **Role-Based Access Control (RBAC)**: 
  - Advisor role
  - Client role
  - Admin role
  - FiSpokeAdmin role
- **Route Guards**: Protected routes based on user roles
- **Session Management**: Secure session handling with token refresh

### 2. User Management

#### Advisor Dashboard
- Advisor home dashboard with account overview
- Client list management
- User profile management
- Account opening tracker
- Transaction monitoring
- Liquidity dashboard

#### Client Dashboard
- Client-specific dashboard
- Account viewing and management
- Application status tracking
- Document access

#### Admin Dashboard
- User management
- Client resubmission management
- Client term acknowledgment
- System administration

### 3. Financial Products

#### High Yield Savings Accounts (HYSA)
- **Individual HYSA**: Personal high-yield savings account creation
- **Business HYSA**: Business account creation with:
  - Business details management
  - Authorized signers management
  - Beneficiaries management
  - Controllers management
  - Document upload and verification
  - Plaid integration for bank verification
- **Trust HYSA**: Trust account creation and management
- **HYSA Calculator**: Calculate savings potential with different rates
- Support for multiple institutions (Bell Bank, American Express, etc.)
- Account types with and without advisor fees

#### Credit Cards
- Credit card application process
- Credit card account creation
- Credit card landing pages (advisor and client views)
- Credit card details viewing
- Credit card process management
- Integration with multiple card providers

#### Mortgages & Home Loans
- Mortgage application process
- Refinancing applications
- Home Equity Line of Credit (HELOC)
- Sage Home Loans integration
- Mortgage listing and tracking
- Client mortgage list view
- Application status tracking

#### Securities-Based Loans (SBL)
- SBL application creation
- SBL landing pages (advisor and client)
- Proposal details management
- Participant management
- Application participants viewing
- Bank review workflows (failure, hold, rejection)
- Credit check processing
- Fund withdrawal management
- Email notifications

#### Advisor Financing
- Advisor financing account creation
- Financing listing management
- Application tracking

#### Life Settlements
- Life settlement account creation
- Life settlement listing
- Account management

#### Customized Borrowing
- Custom borrowing application creation
- Advisor and client views
- Bank user views
- Application management

### 4. Client Management

- **Client List**: Comprehensive client listing with search and filters
- **Client Details**: Detailed client information management
- **Client Onboarding**: Streamlined client onboarding process
- **Client Communication**: Email integration for client communications
- **Client Documents**: Document management per client
- **Client Accounts**: View all accounts associated with a client

### 5. Account Management

#### Deposit Accounts
- Deposit account creation
- Account overview and details
- Account tracking
- Account opening status monitoring
- Cash balance management
- Cash flow summary
- Cash movement tracking
- Linked bank accounts management

#### Account Operations
- Account withdrawal services
- Transaction services
- Account details service
- Account opening tracker
- Address list management
- Owner list management

### 6. Document Management

- **Document Upload**: Secure document upload functionality
- **Document Compression**: File compression service for optimized storage
- **Document Verification**: Document verification workflows
- **Document Ordering**: Bank document ordering system
- **Document Tracking**: Track document status and submissions
- **PDF Generation**: Generate PDF documents for applications
- **Document Templates**: Pre-configured document templates

### 7. Transaction Management

- Transaction listing and filtering
- Transaction approval workflows
- Transaction status tracking
- Transaction history
- Real-time transaction updates
- Transaction search and filtering

### 8. Liquidity Dashboard

- **Product Comparison**: Compare financial products across institutions
- **Rate Comparison**: Compare interest rates and terms
- **Institution Information**: View details of participating financial institutions
- **Product Availability**: Check product availability by institution
- **Rate Tracking**: Track current rates and limits
- **Preferred Institutions**: Mark and filter preferred institutions

### 9. Marketplace

- **Product Marketplace**: Browse available financial products
- **Institution Marketplace**: View participating financial institutions
- **Product Information**: Detailed product descriptions and features
- **Oloy Bank Integration**: Specialized marketplace for Oloy Bank products
- **Product Filtering**: Filter products by type, institution, and features

### 10. Calculators & Tools

- **HYSA Calculator**: Calculate potential savings with high-yield accounts
- **Mortgage Calculator**: Calculate mortgage payments and terms
- **Loan Calculators**: Various loan calculation tools
- **Financial Planning Tools**: Tools for financial planning and analysis

### 11. Email & Communication

- **Email Service**: Integrated email functionality
- **Email Templates**: Pre-configured email templates
- **SBL Email Component**: Specialized email for securities-based loans
- **Notification System**: System-wide notification service
- **Client Communications**: Direct communication with clients

### 12. Bank Agreements

- Bank agreement management
- Agreement viewing and acceptance
- Agreement tracking
- Client agreement acknowledgment

### 13. Application Workflows

#### Application Creation
- Multi-step application forms
- Form validation and error handling
- Progress tracking
- Save and resume functionality
- Application preview before submission

#### Application Tracking
- Real-time application status
- Application history
- Status updates
- Application resubmission
- Application approval workflows

### 14. Integration Features

- **Plaid Integration**: Bank account verification and linking
- **API Integration**: RESTful API integration with backend services
- **OpenAPI Code Generation**: Auto-generated API client services
- **GraphQL Support**: GraphQL query support for data fetching
- **Third-Party Services**: Integration with various financial service providers

### 15. UI/UX Features

- **Responsive Design**: Mobile and desktop responsive layouts
- **PrimeNG Components**: Rich UI component library
- **Custom Themes**: Theming support (FiSpoke theme)
- **Loading States**: Skeleton loaders and progress indicators
- **Dialog System**: Reusable dialog components
- **Form Validation**: Comprehensive form validation
- **Data Tables**: Advanced data tables with sorting, filtering, pagination
- **Charts & Visualizations**: ECharts integration for data visualization
- **Rich Text Editors**: Quill and TinyMCE integration for rich text editing

### 16. Data Management

- **Client Data Models**: Structured client data models
- **Account Models**: Account-related data models
- **Transaction Models**: Transaction data structures
- **Form State Management**: Reactive forms with FormBuilder
- **Data Caching**: Efficient data caching strategies
- **State Management**: Component and service-level state management

### 17. Reporting & Analytics

- **Account Overview**: Comprehensive account overview dashboards
- **Transaction Reports**: Transaction reporting and analytics
- **Cash Flow Reports**: Cash flow analysis and reporting
- **Account Opening Reports**: Track account opening metrics
- **Performance Metrics**: System and user performance metrics

### 18. Administrative Features

- **User Management**: Create, update, and manage users
- **Role Management**: Assign and manage user roles
- **Firm Management**: Manage financial firms and advisors
- **Product Management**: Manage financial products
- **System Configuration**: System-wide configuration management
- **Client Resubmission**: Handle client application resubmissions
- **Term Acknowledgment**: Manage client term acknowledgments

### 19. Security & Compliance

- **Data Encryption**: AES encryption for sensitive data
- **Secure API Communication**: Encrypted API endpoints
- **Audit Logging**: Track user actions and system events
- **Compliance Features**: Features to support regulatory compliance
- **Data Privacy**: Privacy-focused data handling

### 20. Technical Features

- **Angular 18**: Modern Angular framework
- **TypeScript**: Type-safe development
- **RxJS**: Reactive programming with observables
- **Modular Architecture**: Feature-based module structure
- **Lazy Loading**: Route-based lazy loading for performance
- **Code Generation**: API client code generation from OpenAPI specs
- **Docker Support**: Containerization support
- **CI/CD Integration**: Continuous integration and deployment
- **Environment Configuration**: Multiple environment support (dev, qa, uat, prod)

---

## User Roles & Permissions

### Advisor
- Create and manage client accounts
- Process financial product applications
- View client information and accounts
- Access liquidity dashboard
- Manage documents and transactions
- Create calculators and proposals

### Client
- View own accounts and applications
- Complete application processes
- Access account details
- View documents
- Manage profile information

### Admin
- User management
- System administration
- Client resubmission handling
- Access to administrative features

### FiSpokeAdmin
- Full system access
- Client term acknowledgment management
- Advanced administrative features

---

## Supported Financial Institutions

- Bell Bank
- American Express
- Bank Central Asia
- Bank of America
- United States National Bank
- And more...

---

## Technology Stack

- **Frontend Framework**: Angular 18
- **UI Library**: PrimeNG 17
- **Styling**: SCSS, PrimeFlex
- **Authentication**: Azure AD B2C (MSAL)
- **State Management**: RxJS
- **Charts**: ECharts
- **Rich Text**: Quill, TinyMCE
- **PDF**: pdf-lib
- **Image Processing**: html2canvas
- **Build Tool**: Angular CLI
- **Package Manager**: pnpm
- **Containerization**: Docker
- **CI/CD**: GitHub Actions / Azure DevOps

---

## Key Workflows

1. **Client Onboarding**: Advisor creates client → Client completes profile → Applications initiated
2. **Account Opening**: Select product → Complete application → Upload documents → Review → Submit → Track status
3. **Application Processing**: Submit application → Bank review → Approval/Rejection → Client notification
4. **Document Management**: Upload → Verify → Process → Store
5. **Transaction Processing**: Initiate → Approve → Execute → Track

---

## Project Structure

- **Pages**: Feature-based page components (advisor-dashboard, admin-dashboard, auth-layout)
- **Services**: Business logic and API integration services
- **Components**: Reusable UI components
- **Guards**: Route protection and authorization
- **Interceptors**: HTTP interceptors for authentication
- **Models**: TypeScript interfaces and models
- **Pipes**: Custom Angular pipes
- **Directives**: Custom directives
- **Utils**: Utility functions and constants

---

## Environment Support

- Development (dev)
- Development 2 (dev2)
- Quality Assurance (qa)
- User Acceptance Testing (uat)
- Production (prod)

---

## Future Enhancements

- Enhanced reporting and analytics
- Mobile application support
- Advanced financial planning tools
- Integration with additional financial institutions
- Real-time notifications
- Enhanced security features
- Performance optimizations

---

## Purpose Summary

FiSpoke is designed to revolutionize how financial advisors interact with clients and manage financial products. It provides a comprehensive, secure, and user-friendly platform that streamlines the entire process from client onboarding to account management, making financial services more accessible and efficient for both advisors and their clients.

