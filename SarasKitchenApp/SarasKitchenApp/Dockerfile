FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app

COPY ./SarasKitchenApp/SarasKitchenApp/certs/localhost.pfx /https/localhost.pfx

COPY ./publish/BlazorServer/ .

ENV ASPNETCORE_URLS=https://+:7227

EXPOSE 7227

ENTRYPOINT ["dotnet", "SarasKitchenApp.dll"]
