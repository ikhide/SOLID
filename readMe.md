# SOLID

## Single Responsibility Principle

This means that every software component (Class, method) should have one reason to change.
This also means that every software component should have only one responsibility.
If we are obeying this rule, we should have high cohesion and low coupling

`Cohesion`: This is the degree to which various parts of a software component are related.

`Coupling`: This is the level of interdependency between various software components.

## Open Closed Principle

Software components should be open for extension but closed for modification. Meaning if you want to add a new feature or extend the functionality of a class, you shouldn’t have to rewrite previously existing code.

## Liskov Substitution Principle

This rule stipulates that you substitute the implementation of one function with another. Objects should be replaceable with their subtypes without affecting the correctness of the program.

## Interface Segregation Principle

No client should be forced to depend on objects it does not use. Ways to know you are violating this principle are:

1. `Fat interfaces`: When an interface is too large, it opens the possibility for violation.
2. `Interfaces with Low Cohesion`: When methods in the interface do not have similar reasons to change.
3. `Empty method Implementations`: When an interface contains more methods than needed by the class.

## Dependency Inversion Principle

High-Level modules should not depend on Low-Level modules. Both should depend on abstractions
Abstractions should not depend on detail. Details should depend on abstractions.

Dependency injection is the process of supplying a class with its dependencies rather than having it instantiate its dependencies thereby, decoupling the parent and dependency classes completely.
