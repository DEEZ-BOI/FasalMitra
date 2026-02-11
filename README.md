#  FasalMitra – Prototype

FasalMitra is a front-end prototype that demonstrates how warehouse-stored crops can be digitally recorded and used to simulate post-harvest loan approval.

This version is a proof-of-concept built to demonstrate system flow between:

- Warehouse / FPO
- Digital Crop Deposit Record
- Lender
- Loan Confirmation

---

##  What This Prototype Shows

This project demonstrates:

- Crop entry by warehouse staff
- Generation of a digital deposit record
- Warehouse stock summary page
- Lender dashboard view
- Loan approval confirmation

The goal is to simulate how stored agricultural produce can be treated as a verified digital asset.

---

##  Prototype Flow

1. **Warehouse Entry (`warehouse.html`)**
   - Staff enters Farmer ID, Crop Type, Quantity, and Quality.
   - A unique Deposit ID is generated.

2. **Deposit Record (`deposit.html`)**
   - Displays digital crop deposit details.
   - Shows verification status.

3. **Warehouse Stock View (`stock.html`)**
   - Shows stored quantity in warehouse.
   - Indicates availability for pledge.

4. **Lender Dashboard (`lender.html`)**
   - Displays deposit details.
   - Shows eligible loan amount.
   - Simulates loan approval.

5. **Loan Confirmation (`loan-granted.html`)**
   - Displays approved loan status.
   - Confirms successful loan processing.

---



##  Technologies Used

- HTML
- CSS
- JavaScript
- URL parameter-based data transfer

Data is passed between pages using URL parameters to simulate backend integration.

---


##  Purpose

This prototype was created to demonstrate the basic workflow of a digital crop deposit and loan approval system using a simple front-end simulation.

It focuses on visualizing stakeholder interaction and data flow rather than backend implementation.

[FasalMitra (Still Under Development)](https://darling-dasik-d05a63.netlify.app/)
